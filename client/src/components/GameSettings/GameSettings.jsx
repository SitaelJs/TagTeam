function GameSettings() {
  return (
    <div>
      <h1>НАСТРОЙКИ ИГРЫ</h1>
      <img alt="pic" />
      {/* // картинка для игры(по айдишке */}
      <div>
        <span>НАЗВАНИЕ ИГРЫ</span>
      </div>
      <div>
        <p>
          <span>ВЫБОР РЕЖИМА</span>
          <select>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>

        </p>
      </div>
      <hr />
    </div>
  )
}

export default GameSettings
