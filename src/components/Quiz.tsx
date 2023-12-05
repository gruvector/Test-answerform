import React from "react";
import question from '../data/questions1.json'
import Card from "./Card";
import CheckboxCard from "./CheckboxCard";

const Quiz = () => {

    return (
        <div>
            {
                question.map((item, index) => {
                    return (
                        <Card key={item.id} quiztitle={item.questionTitle} quizsentence={item.questionSentence}/>
                    )
                })
            }
            <CheckboxCard />
        </div>
    )
}




export default Quiz;