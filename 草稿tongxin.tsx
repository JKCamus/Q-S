const TextInput =  forwardRef((props,ref) => {
  const inputRef = useRef();
  // 关键代码
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} />
})
function TextInputWithFocusButton() {
  // 关键代码
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // 关键代码，`current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };
  return (
    <>
      // 关键代码
      <TextInput ref={inputEl}></TextInput>
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}