if (Meteor.isClient){
Template.cards.myCards = function()
{
    return ["something.png"];
}
    Template.card.isSelected = function()
    {
    return true;
    };
}

