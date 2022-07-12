        try{
        const gift = ['10억', '1000만원', '100만원', '10만원', '1만원', '5천원', '1천원', '꽝..아쉬워요'];
        let samil =0;
        let repeat=0;
        let topdog = 0; 
    
        document.addEventListener('DOMContentLoaded', () => {
            const btnTag = document.querySelector('#id_btn');
           let srbtn = document.getElementById('sr_btn'); 
       
            const outTag = document.querySelector('#id_out');
            srbtn.addEventListener('click', () => {
                outTag.textContent ="";
                repeat = 0;
                topdog = 0;
                samil = 0;
                btnTag.disabled = false;
            });

            btnTag.addEventListener('click', () => {
                const result = getPrize();
                if(topdog<repeat) topdog = repeat;
                outTag.textContent = `축하합니다! ${result} 지금${samil}번째 도전중 연속 ${repeat}번 꽝 최고 꽝 기록 ${topdog}번`;
                if(result == gift[0]){
                    btnTag.disabled = true;
                }
                /*btnTag.disabled = true;*/
                
            });
        })

        const getPrize = function() {
            samil += 1;
            const ranNum = ((Math.random() * 99) +1)            
            const pbt = [2, 3, 4, 5, 10, 15, 20, 85]           
            let res = ''

            for (let i in pbt){ 
                if(ranNum > pbt[6]){
                    repeat += 1;
                    return gift[7];
                }
                else if(pbt[i]>ranNum){
                    repeat = 0;
                    return gift[i];
                }
            }
            repeat += 1;
            return gift[7];
        }
       
    }catch(error){
        console.error(error);
    }