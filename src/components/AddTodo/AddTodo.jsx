import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
// https://www.npmjs.com/package/uuid - 자동으로 고유키값 생성
import styles from './AddTodo.module.css'

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value); // input에 입력할 때 바뀌는 것을 인식
  const handleSubmit = (e) => {
    // form고유의 submit기능이 작동되면 발생하는 함수
    e.preventDefault(); // 페이지가 리프레시되지 않도록

    if (text.trim().length === 0) {
      return;
    }
    // trim() - 빈 부분을 잘라줌
    // 입력된 것이 없을 때는 handleSubmit함수에서 빠져나감(!text - 스페이스여백은 못걸러냄)

    onAdd({ id: uuidv4(), text, status: "active" }); // onAdd함수 실행
    setText(""); // submit버튼 누른 후 input창 초기화
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="할 일을 입력해주세요"
        value={text}
        onChange={handleChange} // 변경될 때마다 handleChange 호출
      />
      <button className={styles.button}>Add</button>
    </form>
  );
};

export default AddTodo;
