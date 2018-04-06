/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



var dragging = false

$("body").on("touchmove", function(){
    dragging = true
})

$("body").on("touchend", function(){

    if ( $(this).hasClass('modal-open') ) {
        $('#bossCardModal').modal('hide')
    }
})

$('body').on('touchstart','[data-toggle="collapse"]', function(){
    $($(this).attr('target')).collapse('toggle')
})

$("body").on("touchstart", function(event){
    // console.log(event.changedTouches)
    // for ( var key in event.changedTouches){
    //     console.log(event.changedTouches[key])
    // }
    dragging = false
})

var mainVm;

Vue.component('boss-card', {
    template: '#boss-card',
    props: ['card', 'discarded', 'setup'],
    data : function(){
        if ( this.card.strength === '*' ) {
            return {
                strength: 8,
                timeoutId: null,
            }
        }
        else {
            return {
                strength: this.card.strength,
                timeoutId: null,
            }
        }
    },

    methods: {
        startChangeStrength: function(amount, event){
            // if ( dragging ) { return }
            this.strength += amount
            var animate = true
            if ( this.card.strength !== '*' && this.strength > this.card.strength) {
                this.strength = this.card.strength
                animate = false
            }
            else if ( this.card.strength === '*' && this.strength > 50 ) {
                this.strength = 50
                animate = false
            }
            if ( this.strength < 0 ) {
                this.strength = 0
                animate = false
            }

            var target = $(event.target)
            if ( animate ) {
                target.addClass('pressed')
                setTimeout(()=>{
                    target.removeClass('pressed')
                },150)
            }
            

            if ( this.strength !== 0 ) {
                this.timeoutId = setTimeout(()=>{
                    this.startChangeStrength(amount, event)
                }, 333)
            }
        },
        stopChangeStrength: function(){
            clearTimeout(this.timeoutId)
        },
        discard: function(){
            this.$emit('discard')
        },
        setModalImg: function(){
            this.$emit('setModalImg')
        },
        rewind: function(){
            this.$emit('rewind')
        },
        moveBossCardToBottom: function(){
            // console.log('move to bottom!')
            this.$emit('movebosscardtobottom')
        },
        truncate: function(str){
            if ( str.length < 18 ) {
                return str
            }
            else {
                return str.slice(0,14) + '...'
            }
        }
    }

})
var router = new VueRouter({
    routes: [
        {
            path: '/fight',
            component: {
                template: '#fight',

                created: function(){

                },
                methods : {
                    drawBossCard: function(){
                        if ( this.$parent.boss === null ) { console.log("Can't draw boss cards before we choose a boss"); return }
                        if ( this.$parent.bossCardsDrawPile.length === 0 ) {
                            console.log(`${this.$parent.boss.name} has been exhausted. Players win!`)
                        }
                        else {
                            this.$parent.tier = this.$parent.bossCardsDrawPile[this.$parent.bossCardsDrawPile.length -1].tier
                            var drawnCard = this.$parent.bossCardsDrawPile.pop()
                            this.$parent.bossCardsInPlay.push(drawnCard)
                            this.$parent.setModalImg(drawnCard)
                            this.$parent.tickerText.unshift(`${drawnCard.name} was drawn from the nemesis deck.`)
                            if ( drawnCard.type === 'Attack' ) { this.discard(drawnCard, this.$parent.bossCardsInPlay.length -1) }
                        }
                    },
                    discard: function(card, index){
                        if ( dragging ) { return }
                        var removedCard = this.$parent.bossCardsInPlay.splice(index, 1)
                        this.$parent.tickerText.unshift(`${removedCard[0].name} was discarded from play. `)
                        this.$parent.bossCardsDiscardPile = removedCard.concat(this.$parent.bossCardsDiscardPile)
                    },

                    // move a boss card from play to the top of the nemesis deck
                    moveBossCardToTop: function(card, index){
                        var cards = this.$parent.bossCardsInPlay.splice(index,1)
                        this.$parent.tickerText.unshift(`${cards[0].name} was returned to the top of the nemesis deck from play.`)
                        this.$parent.bossCardsDrawPile.push(cards[0])
                    },

                    // move a boss card from the discard pile to the bottom of the nemesis deck
                    moveBossCardToBottom: function(card, index){
                        var cards = this.$parent.bossCardsDiscardPile.splice(index,1)
                        this.$parent.tickerText.unshift(`${cards[0].name} was moved to the bottom of the nemesis deck from the discard pile.`)
                        this.$parent.bossCardsDrawPile.unshift(cards[0])
                    },

                    // move a boss card from the discard pile to play
                    moveBossCardToPlay: function(card, index){
                        var cards = this.$parent.bossCardsDiscardPile.splice(index,1)
                        this.$parent.tickerText.unshift(`${cards[0].name} was returned to play from the discard pile.`)
                        this.$parent.bossCardsInPlay.push(cards[0])
                    }
                }

            }
        },
        {
            path: '/',
            component: setupComponent
        },
        {
            path: '/misc',
            component: {
                template: '#misc'
            }
        },
        {
            path: '/turn-order',
            component: {
                template: '#turn-order',


            }
        },

    ],
})

var phonegapApp = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);

    },
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        StatusBar.hide()

        mainVm = new Vue({
            el: '#app',
            router: router,
            data : {
                greeting: "Welcome back.",
                numberOfPlayers: 4,
                boss: null,
                allBossCards: cardsBoss,
                bossCardsDrawPile: [], // draw pile
                bossCardsDiscardPile: [],
                bossCardsInPlay: [],
                mages: [],
                turnOrderDrawPile: null,
                turnOrderDiscardPile: [],
                currentMarket: [],
                showingTopCard: false,
                graveHoldHealth: 30,
                bossHealth: 70,
                bossMaxHealth: 99,
                tickerText: [' '],
                tier: 1,
                tokens: 0, // some nemeses can create tokens
                expansions: JSON.parse(localStorage.getItem('expansions')) || ['AE'],
                modalImg: '',
                transitioning: false,
                touchingNextTurnButton: false,
                timeoutId: null,
                collapses: {
                    collapseOne: true,
                    collapseTwo: true,
                    collapseThree: true,
                    collapseFour: true,
                    collapseFive: true,
                    collapseDiscardPile: true,
                },
            },
            computed : {
            },
            created : function(){
            
            },
            methods: {


                nextTurn: function(event){
                    this.touchingNextTurnButton = false
                    if ( this.turnOrderDrawPile === null ) { return }
                    // console.log(event)

                    if ( this.turnOrderDrawPile.length > 0 ) {
                        this.turnOrderDiscardPile.push(this.turnOrderDrawPile.pop())
                        this.showingTopCard = false
                        this.setModalImg(this.turnOrderDiscardPile[this.turnOrderDiscardPile.length-1][0], true)
                    }
                    else {
                        this.shuffleDeck(event)
                        this.turnOrderDiscardPile.push(this.turnOrderDrawPile.pop())
                        this.showingTopCard = false
                        this.setModalImg(this.turnOrderDiscardPile[this.turnOrderDiscardPile.length-1][0], true)
                    }
                    setTimeout(()=>{
                        $('#bossCardModal').modal('hide')

                    }, 1450)
                },
                shuffleDeck: function(event){
                    while ( this.turnOrderDiscardPile.length ) {
                        this.turnOrderDrawPile.push(this.turnOrderDiscardPile.pop())
                    }
                    this.turnOrderDrawPile = _.shuffle(this.turnOrderDrawPile)
                    this.showingTopCard = false
                    this.tickerText.unshift("The turn order deck was shuffled.")
                    if ( event ) {
                        $(event.target).addClass('pressed')
                        setTimeout(()=>{
                            $(event.target).removeClass('pressed')
                        },150)
                    }
                },
                revealTopCard: function(event){
                    if ( this.turnOrderDrawPile.length === 0 ) {
                        this.shuffleDeck()
                    }
                    this.showingTopCard = !this.showingTopCard
                    $(event.target).addClass('pressed')
                    setTimeout(()=>{
                        $(event.target).removeClass('pressed')
                    },150)


                },
                returnToDeck: function(i, event){
                    var cardsToReturn = this.turnOrderDiscardPile.splice(i,1)
                    this.turnOrderDrawPile = this.turnOrderDrawPile.concat(cardsToReturn)
                    this.turnOrderDrawPile = _.shuffle(this.turnOrderDrawPile)
                    this.showingTopCard = false
                    this.tickerText.unshift(`${cardsToReturn[0][0]} was shuffled into the turn order deck.`)
                },
                moveTopCardToBottom: function(event){
                    this.turnOrderDrawPile.unshift(this.turnOrderDrawPile.pop())
                    this.showingTopCard = false
                    this.tickerText.unshift("The top card of the turn order deck was moved to the bottom.")
                    $(event.target).addClass('pressed')
                    setTimeout(()=>{
                        $(event.target).removeClass('pressed')
                    },150)
                },

                startChangeHealth: function(who, amount, event){
                    if ( !['graveHoldHealth', 'bossHealth', 'tokens'].includes(who) ) {
                        console.log('index.js 145: oops...')
                        return
                    }
                    var animate = true
                    this[who] += amount
                    if (this.graveHoldHealth < 0 ) { this.graveHoldHealth = 0; animate = false }
                    if (this.graveHoldHealth > 40 ) { this.graveHoldHealth = 40; animate = false }
                    if (this.bossHealth < 0 ) { this.bossHealth = 0; animate = false }
                    if (this.bossHealth >  99) { this.bossHealth = 99; animate = false }
                    if (this.tokens < 0 ) { this.tokens = 0; animate = false }
                    if (this.tokens < 2 && this.boss.name === 'Magus Of Cloaks') { this.tokens = 2; animate = false }
                    if (this.tokens > 16) { this.tokens = 16; animate = false }
                    // console.log(event.target)
                    var target = $(event.target)
                    if ( animate ) {
                        target.addClass('pressed')
                        setTimeout(()=>{
                            target.removeClass('pressed')
                        },150)
                    }

                    this.timeoutId = setTimeout(()=>{
                        this.startChangeHealth(who,amount, event)
                    },333)

                },
                stopChangeHealth: function(){
                    clearTimeout(this.timeoutId)
                },
                //obsolete
                // changeHealth: function(who, amount, event){
                //     if ( !['graveHoldHealth', 'bossHealth', 'tokens'].includes(who) ) {
                //         console.log('index.js 145: oops...')
                //         return
                //     }

                //     this[who] += amount
                //     if (this.graveHoldHealth < 0 ) { this.graveHoldHealth = 0 }
                //     if (this.graveHoldHealth > 40 ) { this.graveHoldHealth = 40 }
                //     if (this.bossHealth < 0 ) { this.bossHealth = 0 }
                //     if (this.bossHealth >  99) { this.bossHealth = 99 }
                //     if (this.tokens < 0 ) { this.tokens = 0 }

                // },
                setModalImg: function(card, isFileName){
                    if ( dragging ) { return }
                    if ( isFileName ) {
                        this.modalImg = `img/${card}.jpg`
                    }
                    else {
                        this.modalImg = `img/${card.name}.jpg`
                    }

                    $('#bossCardModal').modal()
                }

            }
        })        
    },

};

phonegapApp.initialize();
