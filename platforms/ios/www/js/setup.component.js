var filterByTier = function(tier, expansion){
    return function(card){
        if ( expansion ) {
            return card.tier === tier && card.expansion === expansion
        }
        else {
            return card.tier === tier
        }
    }
}

var setupComponent = {
    template: '#setup',
    data: function(){
        return {
            allGems: cardsGem,
            allSpells: cardsSpell,
            allRelics: cardsRelic,
            allMages: mages,
            allBosses: bosses,
            chosenMarketSetup: null,

            turnOrders: {
                '1'   : [['Player 1',1], ['Player 1',1], ['Player 1',1], ['Nemesis','N'], ['Nemesis','N']],
                '1.5' : [['Player 1',1], ['Player 1',1], ['Player 1',1], ['Player 1',1],  ['Nemesis','N'] , ['Nemesis','N']],
                '2'   : [['Player 1',1], ['Player 1',1], ['Player 2',2], ['Player 2', 2], ['Nemesis','N'] , ['Nemesis','N']],
                '3'   : [['Player 1',1], ['Player 2',2], ['Player 3',3], ['Wild', 'W'],   ['Nemesis','N'] , ['Nemesis','N']],
                '4'   : [['Player 1',1], ['Player 2',2], ['Player 3',3], ['Player 4', 4], ['Nemesis','N'] , ['Nemesis','N']],
            },
            startingNemesisTokens: {
                "Rageborne": 1,
                "Umbra Titan": 8,
                "Gate Witch": 1,
                "Magus Of Cloaks": 4,
                "Maiden Of Thorns": 0,
                "Thrice Dead Prophet": 0,
            },

            // (A)dded (B)asic (C)ards
            // the number of basic nemesis cards to add, based on tier and number of players
            abc: {
                players: {
                    1: {
                        tier: {
                            1:1,
                            2:3,
                            3:7
                        }
                    },
                    "1.5": {
                        tier: {
                            1:1,
                            2:3,
                            3:7
                        }
                    },
                    2: {
                        tier: {
                            1:3,
                            2:5,
                            3:7
                        }
                    },
                    3: {
                        tier: {
                            1:5,
                            2:6,
                            3:7
                        }
                    },
                    4: {
                        tier: {
                            1:8,
                            2:7,
                            3:7
                        }
                    },
                }
            },


            marketSetups: [
                {
                    imgPath: 'img/market1.jpg',
                    setUp: ()=> {
                        if ( this.chosenMarketSetup === null || dragging ) { return }
                        var cards = [];
                        var gems = this.gems.slice()
                        var relics = this.relics.slice()
                        var spells = this.spells.slice()
                        var smallGems = gems.filter(function(gem) {return gem.cost < 4});
                        var smallGem = _.sample(smallGems);
                        cards.push(smallGem);
                        var index = gems.indexOf(smallGem);
                        gems.splice(index,1);
                        var fourGems =  gems.filter(function(gem) {return gem.cost == 4});
                        var fourGem = _.sample(fourGems);
                        cards.push(fourGem);
                        var index = gems.indexOf(fourGem);
                        gems.splice(index,1);
                        cards.push(_.sample(gems));

                        cards = cards.concat(_.sample(relics,2));
                        
                        var smallSpells = spells.filter(function(spell) {return spell.cost < 5});
                        cards = cards.concat(_.sample(smallSpells,2));
                        var bigSpells = spells.filter(function(spell) {return spell.cost > 5});
                        cards = cards.concat(_.sample(bigSpells,2));
                        this.$parent.currentMarket = cards;
                        // this.setBossAndMages()
                    }
                },
                {
                    imgPath: 'img/market2.jpg',
                    setUp: ()=> {
                        if ( this.chosenMarketSetup === null || dragging ) { return }
                        var cards = [];
                        var gems = this.gems.slice()
                        var relics = this.relics.slice()
                        var spells = this.spells.slice()
                        var gems = this.gems.slice()
                        var relics = this.relics.slice()
                        var spells = this.spells.slice()
                        var largeGems = gems.filter(function(gem) {return gem.cost > 3});
                        cards = cards.concat(_.sample(largeGems, 3));

                        var largeRelics = relics.filter(function(relic) {return relic.cost > 4});
                        var largeRelic = _.sample(largeRelics);
                        cards.push(largeRelic);
                        var index = relics.indexOf(largeRelic);
                        relics.splice(index,1);
                        cards.push(_.sample(relics));
                        
                        var smallSpells = spells.filter(function(spell) {return spell.cost < 6});
                        cards = cards.concat(_.sample(smallSpells,3));
                        var bigSpells = spells.filter(function(spell) {return spell.cost > 6});
                        cards = cards.concat(_.sample(bigSpells,1));
                        this.$parent.currentMarket = cards;
                        // this.setBossAndMages()
                    }
                },
                {
                    imgPath: 'img/market3.jpg',
                    setUp: ()=> {
                        if ( this.chosenMarketSetup === null || dragging ) { return }
                        var cards = [];
                        var gems = this.gems.slice()
                        var relics = this.relics.slice()
                        var spells = this.spells.slice()
                        var smallGems = gems.filter(function(gem) {return gem.cost < 4});
                        var largeGems = gems.filter(function(gem) {return gem.cost == 4 || gem.cost == 5});
                        cards.push(_.sample(smallGems));
                        cards = cards.concat(_.sample(largeGems, 2));
                        
                        cards.push(_.sample(relics));
                        
                        var threeSpells = spells.filter(function(spell) {return spell.cost == 3});
                        cards.push(_.sample(threeSpells));
                        var fourSpells = spells.filter(function(spell) {return spell.cost == 4});
                        cards.push(_.sample(fourSpells));
                        var bigSpells = spells.filter(function(spell) {return spell.cost > 5});
                        cards = cards.concat(_.sample(bigSpells,3));
                        this.$parent.currentMarket = cards;
                        // this.setBossAndMages()
                    }
                },
                {
                    imgPath: 'img/market4.jpg',
                    setUp: ()=> {
                        if ( this.chosenMarketSetup === null || dragging ) { return }
                        var cards = [];
                        var gems = this.gems.slice()
                        var relics = this.relics.slice()
                        var spells = this.spells.slice()
                        var largeGems = gems.filter(function(gem) {return gem.cost > 4});
                        var largeGem = _.sample(largeGems);
                        cards.push(largeGem);
                        var index = gems.indexOf(largeGem);
                        gems.splice(index,1);
                        cards = cards.concat(_.sample(gems,2));
                        
                        var smallRelics = relics.filter(function(relic) {return relic.cost < 4});
                        var smallRelic = _.sample(smallRelics);
                        cards.push(smallRelic);
                        var index = relics.indexOf(smallRelic);
                        relics.splice(index,1);
                        var largeRelics = relics.filter(function(relic) {return relic.cost > 4});
                        var largeRelic = _.sample(largeRelics);
                        cards.push(largeRelic);
                        var index = relics.indexOf(largeRelic);
                        relics.splice(index,1);
                        cards.push(_.sample(relics));
                        
                        var smallSpells = spells.filter(function(spell) {return spell.cost < 5});
                        var smallSpell = _.sample(smallSpells);
                        cards.push(smallSpell);
                        var index = spells.indexOf(smallSpell);
                        spells.splice(index,1);
                        var largeSpells = spells.filter(function(spell) {return spell.cost > 5});
                        var largeSpell = _.sample(largeSpells);
                        cards.push(largeSpell);
                        var index = spells.indexOf(largeSpell);
                        spells.splice(index,1);
                        cards.push(_.sample(spells));
                        this.$parent.currentMarket = cards;
                        // this.setBossAndMages()
                    }
                },
                {
                    imgPath: 'img/market5.jpg',
                    setUp: ()=> {
                        if ( this.chosenMarketSetup === null || dragging ) { return }
                        var cards = [];
                        var gems = this.gems.slice()
                        var relics = this.relics.slice()
                        var spells = this.spells.slice()
                        var twoGems = gems.filter(function(gem) {return gem.cost== 2 || gem.cost==3});
                        // if ( twoGems.length === 0 ) {
                        //     console.log('oops! no 2-cost gems. pick another market setup, or buy the base game.')
                        //     return
                        // }
                        cards.push(_.sample(twoGems));
                        var threeGems = gems.filter(function(gem) {return gem.cost== 3});
                        cards.push(_.sample(threeGems));
                        var fourGems = gems.filter(function(gem) {return gem.cost== 4});
                        cards.push(_.sample(fourGems));
                        var fiveGems = gems.filter(function(gem) {return gem.cost== 5});
                        cards.push(_.sample(fiveGems));
                        
                        cards.push(_.sample(relics));
                        
                        var fourSpells = spells.filter(function(spell) {return spell.cost == 4});
                        cards.push(_.sample(fourSpells));
                        var fiveSpells = spells.filter(function(spell) {return spell.cost == 5});
                        cards.push(_.sample(fiveSpells));
                        var sixSpells = spells.filter(function(spell) {return spell.cost == 6});
                        cards.push(_.sample(sixSpells));
                        var largeSpells = spells.filter(function(spell) {return spell.cost >6});
                        cards.push(_.sample(largeSpells));
                        this.$parent.currentMarket = cards;
                        // this.setBossAndMages()
                    }
                },
                {
                    imgPath: 'img/market6.jpg',
                    setUp: ()=> {
                        if ( this.chosenMarketSetup === null || dragging ) { return }
                        var cards = [];
                        var gems = this.gems.slice()
                        var relics = this.relics.slice()
                        var spells = this.spells.slice()
                        var threeGems = gems.filter(function(gem) {return gem.cost== 3});
                        cards.push(_.sample(threeGems));
                        var fourGems = gems.filter(function(gem) {return gem.cost== 4});
                        cards.push(_.sample(fourGems));
                        
                        
                        var smallRelics = relics.filter(function(relic) {return relic.cost < 4});
                        var smallRelic = _.sample(smallRelics);
                        cards.push(smallRelic);
                        var index = relics.indexOf(smallRelic);
                        relics.splice(index,1);
                        var largeRelics = relics.filter(function(relic) {return relic.cost > 4});
                        var largeRelic = _.sample(largeRelics);
                        cards.push(largeRelic);
                        var index = relics.indexOf(largeRelic);
                        relics.splice(index,1);
                        cards.push(_.sample(relics));
                        
                        var smallSpells = spells.filter(function(spell) {return spell.cost == 3 || spell.cost == 4});
                        cards.push(_.sample(smallSpells));
                        var medSpells = spells.filter(function(spell) {return spell.cost == 5 || spell.cost == 6});
                        cards = cards.concat(_.sample(medSpells,2));
                        var largeSpells = spells.filter(function(spell) {return spell.cost >6});
                        cards.push(_.sample(largeSpells));
                        this.$parent.currentMarket = cards;
                        // this.setBossAndMages()
                    }
                },

                {
                    imgPath: 'img/card-random.png',
                    setUp: ()=> {
                        if ( this.chosenMarketSetup === null || dragging ) { return }
                        var cards = []
                        var allCards = this.gems.slice().concat(this.relics.slice().concat(this.spells.slice()))

                        cards = _.sample(allCards, 9).sort(function(a, b){
                            if      ( a.type > b.type ) { return 1  }
                            else if ( a.type < b.type ) { return -1 }
                            else                        { return 0  }
                        })
                    
                        this.$parent.currentMarket = cards;
                        // this.setBossAndMages()
                    }
                },

            ]

        }
    },
    computed: {
        bosses: function(){
            return this.allBosses.filter((boss)=>{
                if ( this.$parent.expansions.includes(boss.expansion) ) {
                    return true
                }
                else { return false }
            }).sort((a,b)=>{
                return a.name > b.name
            })
        },

        mages: function(){
            return this.allMages.filter((mage)=>{
                if ( this.$parent.expansions.includes(mage.expansion) ) {
                    return true
                }
                else { return false }
            })
        },
        spells: function(){
            return this.allSpells.filter((spell)=>{
                if ( this.$parent.expansions.includes(spell.expansion) ) {
                    return true
                }
                else { return false }
            })
        },
        gems: function(){
            return this.allGems.filter((gem)=>{
                if ( this.$parent.expansions.includes(gem.expansion) ) {
                    return true
                }
                else { return false }
            })
        },
        relics: function(){
            return this.allRelics.filter((relic)=>{
                if ( this.$parent.expansions.includes(relic.expansion) ) {
                    return true
                }
                else { return false }
            })
        }
    },

    created: function(){
        if( !this.$parent.turnOrderDrawPile ) {
            this.setNumberOfPlayers(this.$parent.numberOfPlayers)
        }
        $(document).ready(()=>{

            $('body').on('show.bs.collapse', '.collapse', (event)=>{
                this.$parent.collapses[event.target.id] = true
            })
            $('body').on('hide.bs.collapse', '.collapse', (event)=>{
                this.$parent.collapses[event.target.id] = false
            })
        })
    },
    methods: {
        resetGame: function(){
            this.$parent.graveHoldHealth = 30
            this.$parent.tier = 1
            this.$parent.tickerText = []
            if (this.$parent.boss) { this.$parent.bossHealth = this.$parent.boss.health }
        },
        setNumberOfPlayers: function(num){
            this.$parent.numberOfPlayers = num
            this.$parent.turnOrderDrawPile = this.turnOrders[this.$parent.numberOfPlayers].slice()
            this.$parent.turnOrderDrawPile = _.shuffle(this.$parent.turnOrderDrawPile)
            this.$parent.turnOrderDiscardPile = []
            if ( this.$parent.boss ) {
                this.setBoss(this.$parent.boss)
            }

        },
        saveExpansions: function(){
            console.log('expansions? ', JSON.stringify(this.$parent.expansions) )
            localStorage.setItem('expansions', JSON.stringify(this.$parent.expansions))
        },
        getAbc: function(tier){
            return this.abc.players[this.$parent.numberOfPlayers].tier[tier]
        },
        setMages: function(){
            if ( this.chosenMarketSetup === null || dragging ) { return }
            this.$parent.mages = _.sample(this.mages, this.$parent.numberOfPlayers)
            if ( this.$parent.boss ) {
                this.setBoss(this.$parent.boss)
            }
        },
        hideModals: function(){
            if ( this.chosenMarketSetup === null || dragging ) { return }
            $('#collapseTwo').collapse('hide')
            $('#collapseOne').collapse('hide')
        },
        setBoss: function(boss){
            if ( this.chosenMarketSetup === null || dragging ) { return }

            this.$parent.boss = boss || _.sample(this.bosses)
            this.$parent.bossHealth = this.$parent.boss.health
            this.$parent.bossMaxHealth = this.$parent.boss.health

            this.$parent.bossCardsDrawPile = this.$parent.allBossCards.filter((bossCard)=>{
                if ( this.$parent.expansions.includes(bossCard.expansion) && [this.$parent.boss.name, 'basic'].includes(bossCard.boss)) {
                    return true
                }
                else { return false }
            })

            var tier1 = this.$parent.bossCardsDrawPile.filter(filterByTier(1))
            var tier1Basic = _.shuffle(tier1.filter(function(card){
                return card.boss === 'basic'
            }))
            var tier1Nonbasic = tier1.filter(function(card){
                return card.boss !== 'basic'
            })
            if ( tier1Basic.length > this.getAbc(1) ) {
                tier1Basic.length = this.getAbc(1)
            }
            tier1 = _.shuffle(tier1Basic.concat(tier1Nonbasic))

            var tier2 = this.$parent.bossCardsDrawPile.filter(filterByTier(2))
            var tier2Basic = _.shuffle(tier2.filter(function(card){
                return card.boss === 'basic'
            }))
            var tier2Nonbasic = tier2.filter(function(card){
                return card.boss !== 'basic'
            })
            if ( tier2Basic.length > this.getAbc(2) ) {
                tier2Basic.length = this.getAbc(2)
            }
            tier2 = _.shuffle(tier2Basic.concat(tier2Nonbasic))

            var tier3 = this.$parent.bossCardsDrawPile.filter(filterByTier(3))
            var tier3Basic = _.shuffle(tier3.filter(function(card){
                return card.boss === 'basic'
            }))
            var tier3Nonbasic = tier3.filter(function(card){
                return card.boss !== 'basic'
            })
            if ( tier3Basic.length > this.getAbc(3) ) {
                tier3Basic.length = this.getAbc(3)
            }
            tier3 = _.shuffle(tier3Basic.concat(tier3Nonbasic))

            this.$parent.bossCardsDrawPile = tier1.concat(tier2).concat(tier3).reverse()
            console.log('boss card draw pile: ', this.$parent.bossCardsDrawPile)
            this.$parent.bossCardsDiscardPile = []
            this.$parent.bossCardsInPlay = []


            this.$parent.tokens = this.startingNemesisTokens[this.$parent.boss.name]
            this.$parent.shuffleDeck()
            this.$parent.graveHoldHealth = 30
            this.$parent.tickerText = []
            this.$parent.tier = 1

        }
    }
}