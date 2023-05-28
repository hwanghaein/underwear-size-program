
const startButton = document.querySelector(".button");



  function resultHandler() {
    
    let promptOfBottom = prompt( "당신의 밑가슴 둘레를 입력해주세요. (단위는 제외하고 작성)", ""); // 밑가슴 둘레 입력
    let perimeterOfBottom = Number(promptOfBottom); // 입력 값을 숫자로 변환 
   

    if (isNaN(perimeterOfBottom)){
      throw new Error( alert('작성 값은 숫자여야 합니다.')); // 숫자가 아니면 (NaN이면) 에러가 뜸
    }


    if (perimeterOfBottom <= 57 || perimeterOfBottom > 92 ){
      throw new Error( alert('58 이상 92 이하의 값을 입력해주세요.')); // 조건에 맞는 값이 아니면 에러가 뜸
    }



    let sizeNumber = 
        ( 58 <= perimeterOfBottom && perimeterOfBottom <= 62 ) ? 60 : 
        ( 63 <= perimeterOfBottom && perimeterOfBottom <= 67 ) ? 65 :
        ( 68 <= perimeterOfBottom && perimeterOfBottom <= 72 ) ? 70 :
        ( 73 <= perimeterOfBottom && perimeterOfBottom <= 77 ) ? 75 :
        ( 78 <= perimeterOfBottom && perimeterOfBottom <= 82 ) ? 80 :
        ( 83 <= perimeterOfBottom && perimeterOfBottom <= 87 ) ? 85 :
        ( 88 <= perimeterOfBottom && perimeterOfBottom <= 92 ) ? 90 :
        null;

    console.log(sizeNumber);


    let promptOfTop = prompt("당신의 윗가슴 둘레를 입력해주세요", ""); // 윗가슴 둘레 입력    
    let perimeterOfTop = Number(promptOfTop); // 입력 값을 숫자로 변환 
   

   if (isNaN(perimeterOfTop)){
      throw new Error( alert('작성 값은 숫자여야 합니다.'));  // 숫자가 아니면 (NaN이면) 에러가 뜸
    }

    let gap = perimeterOfTop - perimeterOfBottom;


    if ( gap <= 7.4 || gap >= 22.5 ){
      throw new Error( alert('해당하는 컵 사이즈가 없습니다.')); // 조건에 맞는 값이 아니면 에러가 뜸
    }
    

    let cupNumber =  

        ( gap < 7.5 ) ? "AA컵" :
        ( 7.5 <= gap && gap < 10 ) ? "A컵" : 
        ( 10 <= gap && gap < 12.5 ) ? "B컵" : 
        ( 12.5 <= gap && gap < 15 ) ? "C컵" : 
        ( 15 <= gap && gap < 17.5) ? "D컵" : 
        ( 17.5 <= gap && gap < 20 ) ? "E컵" : 
        ( 20 <= gap && gap < 22.5 ) ? "F컵" : 
         null;
    
    
    console.log(cupNumber);


    alert(`당신의 속옷 사이즈는 ${sizeNumber} ${cupNumber}입니다.`);

  }

  startButton.addEventListener("click", resultHandler); // 클릭 이벤트 생성