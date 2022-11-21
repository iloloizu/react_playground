import React, {useState} from 'react'

function ToggleHook() {
    const [isHappy, setIsHappy] = useState(true)
  return (
    <div>
        <h3 onClick={() => setIsHappy(!isHappy)}>{isHappy ? "😄" : "😢"}</h3>
    </div>
  )
}

export default ToggleHook