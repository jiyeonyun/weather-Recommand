import React, { useEffect, useState } from 'react';

function Recommand(props){
    let temper = props.weather.main.temp 
            if(temper<4){
            return <h3 className='recommand'>π§£λκΊΌμ΄ μ·μ μμΌμΈμπ§€<br/>ν¨λ©,λκΊΌμ΄μ½νΈ,λͺ©λλ¦¬ λ±</h3>
            }
            else if(4 <= temper && temper< 8){
                return <h3 className='recommand'>π§₯μμ°ν°λ₯Ό κΌ­ μ±κΈ°μΈμπ§΅<br/>μ½νΈ,κ°μ£½μμΌ,λνΈ λ±</h3>
            }
            else if(8<= temper && temper<11){
            return <h3 className='recommand'>π§₯κ°λ²Όμ΄ μμ°ν°λ μ΄λ¨κΉμ?π<br/>μμΌ,κ°λκ±΄,μ²­λ°μ§ λ±</h3>
            }
            else if(11<= temper && temper<16){
            return <h3 className='recommand'>π§ΆλνΈλ κ°λκ±΄ λ§¨ν¬λ§¨ μ λκ° μ’κ² μ΄μπ§¦<br/>λνΈ, κ°λκ±΄, λ§¨ν¬λ§¨,νλν° λ±</h3>
            }
            else if(16<= temper && temper<22){
            return <h3 className='recommand'>πμμ μμΈ λ λ°νμ μ΄λ¨κΉμ?π<br/>μμ μμΈ , λ°ν, λ°λ°μ§ λ±</h3>
            }
            else{
            return <h3 className='recommand'>πλ―Όμλ§€λ λ°ν μνΌμ€λ μ΄λ¨κΉμ?π<br/>λ―Όμλ§€,λ°ν,λ°λ°μ§,μνΌμ€ λ±</h3>
            }
}
    export default Recommand;

