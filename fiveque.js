//----------Problem Number-05--//////
function gemsToDiamond(DiamondQuantity1, DiamondQuantity2, DiamondQuantity3){
            const PerFirstFrndGems = 21;
            const PerSecondFrndGems = 32;
            const PerThirdFrndGems = 43;

            const FirstFrndDiamond = DiamondQuantity1 * PerFirstFrndGems;
            const SecondFrndDiamond = DiamondQuantity2 * PerSecondFrndGems;
            const ThirdFrndDiamond = DiamondQuantity3 * PerThirdFrndGems;

            const totalDiamond = FirstFrndDiamond + SecondFrndDiamond + ThirdFrndDiamond;
        
            if(totalDiamond >= 1000 *2){
                return totalDiamond - 2000;
            }
            else(totalDiamond < 1000 *2)
            {
                return totalDiamond;
            }
}
 const totalDiamond = gemsToDiamond(100,5,1)
 console.log(totalDiamond);
  /// function sum() and a function multiply() that sums and multiplies all the numbers.
  // greater than or equal to is used to show that one variable is greater than or equal to given quantity.