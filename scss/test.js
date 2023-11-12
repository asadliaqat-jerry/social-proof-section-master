const component = () => (
    <div style="margin: 10px;">
    <input onChange={(e) => changevalue(e.target.value)}/>
    <button onClick={() => submit()}>
      Submit
    </button>
    <a href="http://site.info/">
      <img src="image.source"/>
    </a>
  </div>
)