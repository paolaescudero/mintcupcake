
function changeMode() { 
    document.querySelector('.body').classList.toggle('body-chocolate');
    document.querySelector('.btn-mint').classList.toggle('btn-mint-chocolate');
    document.querySelector('.h1').classList.toggle('h1-chocolate');   

    //VIDEO: https://recordit.co/QyzM1S7ws5 HASTA ACA
    let title = document.querySelector('.h1').innerText
    
    if (title == "Mint Cupcake"){
        document.querySelector('.h1').innerText = ("Choco Cupcake");
    } else {
        document.querySelector('.h1').innerText = ("Mint Cupcake");
    }

    let btnValue = document.querySelector('button').innerText
    
    if (btnValue == "Choco Mode"){
        document.querySelector('button').innerText = ("Mint Mode");
    } else {
        document.querySelector('button').innerText = ("Choco Mode");
    }
    
    let pText = document.querySelector('p').innerHTML
    
    if (btnValue == "Choco Mode"){
        document.querySelector('p').innerHTML = ("These super moist <b>Chocolate Cupcakes</b> pack TONS of chocolate flavor in each cupcake wrapper! Made from simple everyday ingredients, this easy cupcake recipe will be your new favorite. For best results, use natural <i>cocoa powder</i> and <i>buttermilk</i>. These chocolate cupcakes taste completely over-the-top with chocolate buttercream! <br> <a  class='link-chocolate' href='https://sallysbakingaddiction.com/super-moist-chocolate-cupcakes/' target='_blank'>Check Recipe here</a>");
    } else {
        document.querySelector('p').innerHTML = ("<b>Mint Cupcakes</b> are ultra moist and easy to make with tons of refreshing chocolate peppermint goodness. Perfect for <i>St. Patrick’s Day</i> or <i></i>Christmas!</i>. <br> <a class='link-mint' href='https://www.handletheheat.com/mint-chocolate-cupcake/' target='_blank'>Check Recipe here</a>");
    }
}
