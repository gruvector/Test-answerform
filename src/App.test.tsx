import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";
import { API } from "./API";

test("回答保存ボタンを押して、回答を保存するためのパラメータが渡されること", () => {
  // setup
  const submit = jest
    .spyOn(API, "submit")
    .mockImplementation((args) => Promise.resolve());

  // when
  render(<App />);
  const button = screen.getByText(/回答を保存/i);
  userEvent.click(button);

  // then
  const expected = {}; // TODO: 回答を保存するためのパラメータとして期待するオブジェクトを定義してください
  expect(submit).toBeCalledWith(expected);
});
