const botaoLIGAR = document.querySelector('.botao1');
const botaoDESLIGAR = document.querySelector('.botao2');
const lampada = document.querySelector('.lampada');
const statusTxt = document.querySelector('.status');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const txtCores = document.querySelector('.txtPainel3');
const avisoCores = document.querySelector('.avisoCores');
const logo = document.querySelector('.logo');
const txts = document.querySelector('.txts');
const fundoPainel = document.querySelector('.fundoPainel');
const wrapper = document.querySelector('.wrapper');
const txtRGB = document.querySelector('.txtPainel2');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const sliderOpacity = document.querySelector('.sliderOpacity');
const wrapper2 = document.querySelector('.wrapper2');
const output2 = document.querySelector('.output2');
const txtOPC = document.querySelector('.txtPainel5');


const redSlider = document.querySelector('#red');
const greenSlider = document.querySelector('#green');
const blueSlider = document.querySelector('#blue');

botaoLIGAR.addEventListener('click', () => {

    fundoPainel.style.height = '450px';
    wrapper.style.opacity = '100%';
    txtRGB.style.opacity = '100%';
    redSlider.disabled = false;
    greenSlider.disabled = false;
    blueSlider.disabled = false;
    line1.style.opacity = "100%"
    line2.style.opacity = "100%"
    wrapper2.style.opacity = '100%';
    txtOPC.style.opacity = '100%';
    sliderOpacity.disabled = false;

    lampada.style.backgroundColor = '#ffffff';
    lampada.style.boxShadow = '0px 0px 35px #ffffff';
    statusTxt.textContent = 'LED Status: Ligado'

    logo.src = 'img/lampada2.png';
    logo.style.marginTop = '10px';
    txts.style.marginLeft = '8px';

    botaoLIGAR.style.opacity = '30%';
    botaoLIGAR.style.cursor = 'default';

    botaoDESLIGAR.style.opacity = '100%';
    botaoDESLIGAR.style.cursor = 'pointer';

    botaoLIGAR.disabled = true;
    botaoDESLIGAR.disabled = false;

    red.disabled = false;
    green.disabled = false;
    blue.disabled = false;

    red.style.cursor = 'pointer';
    green.style.cursor = 'pointer';
    blue.style.cursor = 'pointer';

    red.style.opacity = '100%';
    green.style.opacity = '100%';
    blue.style.opacity = '100%';

    
    avisoCores.style.display = 'none';

   
});

botaoDESLIGAR.addEventListener('click', () => {

    fundoPainel.style.height = '140px';
    wrapper.style.opacity = '0%';
    txtRGB.style.opacity = '0%';
    redSlider.disabled = true;
    greenSlider.disabled = true;
    blueSlider.disabled = true;
    line1.style.opacity = "0%"
    line2.style.opacity = "0%"
    wrapper2.style.opacity = '0%';
    txtOPC.style.opacity = '0%';
    sliderOpacity.disabled = true;
    

    lampada.style.backgroundColor = '#2c2c2c';
    lampada.style.boxShadow = '0px 0px 20px #000000';
    statusTxt.textContent = 'LED Status: Desligado'

    logo.src = 'img/lampadaLig.png';
    logo.style.marginTop = '5px';
    txts.style.marginLeft = '-10px';

    botaoLIGAR.style.opacity = '100%';
    botaoLIGAR.style.cursor = 'pointer';

    botaoDESLIGAR.style.opacity = '30%';
    botaoDESLIGAR.style.cursor = 'default';

    botaoLIGAR.disabled = false;
    botaoDESLIGAR.disabled = true;

    red.disabled = true;
    green.disabled = true;
    blue.disabled = true;

    red.style.cursor = 'default';
    green.style.cursor = 'default';
    blue.style.cursor = 'default';

    red.style.opacity = '20%';
    green.style.opacity = '20%';
    blue.style.opacity = '20%';

    avisoCores.style.display = 'flex';

    // document.getElementById('output').innerHTML = '(Desligado)';
});

red.addEventListener('click', () => {
    lampada.style.backgroundColor = '#f70202';
    lampada.style.boxShadow = '0px 0px 20px #f70202';
    statusTxt.textContent = 'LED Status: Ligado (Red)'
});

green.addEventListener('click', () => {
    lampada.style.backgroundColor = '#02f70e';
    lampada.style.boxShadow = '0px 0px 20px #02f70e';
    statusTxt.textContent = 'LED Status: Ligado (Green)'
});

blue.addEventListener('click', () => {
    lampada.style.backgroundColor = '#0243f7';
    lampada.style.boxShadow = '0px 0px 20px #0243f7';
    statusTxt.textContent = 'LED Status: Ligado (Blue)'
});

function colors(){

    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;

    lampada.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';
    lampada.style.boxShadow = '0px 0px 20px rgb('+ red +','+ green +','+ blue +')';

    document.getElementById('output').innerHTML = '('+ red +', '+ green +', '+ blue +')';


        botaoLIGAR.addEventListener('click', () => {
                
            lampada.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';
            lampada.style.boxShadow = '0px 0px 20px rgb('+ red +','+ green +','+ blue +')';

        });
}

function opacity(){

    var opacityNumber = document.getElementById("opacitySlider").value;

    lampada.style.opacity = opacityNumber + '%';

    if(opacityNumber < 5){
        lampada.style.opacity = '5%';
    }


    document.getElementById('output2').innerHTML = opacityNumber + '%';
}

