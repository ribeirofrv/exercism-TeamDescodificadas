//array listando as cores do resistor
export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
//retorna a posição da cor recebida declarada em colors
export const colorCode = (color) => { 
  return COLORS.indexOf(color);
};