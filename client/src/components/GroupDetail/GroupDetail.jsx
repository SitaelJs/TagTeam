import ChatGroup from '../ChatGroup/ChatGroup'

function GroupDetail() {
  return (
    <div>
      <h1>Название группы</h1>
      <h4>LOGO GAME</h4>

      <ul>
        <li>
          Игрок 1
          <p>Роль игрока</p>
          <p>Рейтинг игрока</p>
          <p>Статистика игрока</p>
        </li>
        <li>
          Игрок 2
          <p>Роль игрока</p>
          <p>Рейтинг игрока</p>
          <p>Статистика игрока</p>
        </li>
        <li>
          Игрок 3
          <p>Роль игрока</p>
          <p>Рейтинг игрока</p>
          <p>Статистика игрока</p>
        </li>
        <li>
          Игрок 4
          <p>Роль игрока</p>
          <p>Рейтинг игрока</p>
          <p>Статистика игрока</p>
        </li>
        <li>
          Игрок 5
          <p>Роль игрока</p>
          <p>Рейтинг игрока</p>
          <p>Статистика игрока</p>
        </li>
      </ul>

      <hr />
      <ChatGroup />
    </div>
  )
}

export default GroupDetail
