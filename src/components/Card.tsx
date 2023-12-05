import React from "react";

interface CardPros {
    quiztitle: string,
    quizsentence: String
}


const Card = (props: CardPros) => {

    return (
        <div>
            <div className="card_quiztype">質問タイトル質問タイトル</div>
            <div className="card_quiztitle">{props.quiztitle}</div>
            <div className="card_quizsentence">{props.quizsentence}</div>
            <div className="card_textfield">
                <textarea name="" id="" cols={30} rows={10} maxLength={2000} placeholder="回答を入力してください"></textarea>
            </div>
        </div>
    )
}




export default Card;