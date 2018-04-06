var filterByTier = function(tier){
    return function(card){
        return card.tier === tier
    }
}