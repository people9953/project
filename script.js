const resultDisplay = document.querySelector('.result'); // 결과값 화면 요소를 선택
const buttons = document.querySelectorAll('.buttons button'); // 모든 버튼 요소를 선택
buttons.forEach(button => { // 각 버튼에 클릭 이벤트 리스너를 추가
    button.addEventListener('click', () => { //버튼을 클릭하면 {}에있는 코드 실행
        const buttonValue = button.textContent; // 클릭된 버튼의 값을 가져오기
        const currentDisplay = resultDisplay.textContent; // 현재 화면에 표시된 내용을 가져온다
        if (button.classList.contains('number')) {  // 만약 클릭된 버튼이 number 클래스를 가질때 (숫자 또는 소수점)
            if (buttonValue === '.') { // 클릭한 버튼이 소수점('.') 버튼일때
                if (!currentDisplay.includes('.')) { // 현재 화면에 이미 소수점이 포함되어 있지 않다면!
                    resultDisplay.textContent += buttonValue; // 화면에 소수점을 추가
                }
            } else { // 만약 클릭된 버튼이 숫자인 경우
                if (currentDisplay === '0') { // 현재 화면에 '0'만 표시되고 있을때
                    if (buttonValue !== '0') { // 클릭된 버튼 값이 '0'이 아닐때
                        resultDisplay.textContent = buttonValue;  // '0'을 지우고 클릭된 버튼 값으로 바꾸기
                    }
                } else { // 그 외의 모든 경우
                    resultDisplay.textContent += buttonValue; // 현재 화면 내용 뒤에 클릭된 버튼 값을 이어 붙이기
                }
            }
        } else if (button.classList.contains('function')) {  // 클릭한 버튼이 function 클래스일때
            if (buttonValue === 'C') {  // 클릭한 버튼의 값이 'C' 일때
                resultDisplay.textContent = '0'; // 화면에 표시된 값을 '0'으로 바꿔서 초기화하기
            }
            ㅇ
            // ±, % 같은 다른 function 버튼 기능 추가 자리

        } else if (button.classList.contains('operator')) { // 클릭한 버튼이 operator 클래스일때

            // 연산자 버튼 (+, -, *, /) 및 결과 (=) 기능 추가 자리

        }
    });
});
