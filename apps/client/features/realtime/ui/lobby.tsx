import { useAtomValue } from 'jotai'
import { useCallback, useEffect } from 'react'
import { socketAtom } from '../lib/socketIo'

type Props = {
  lobbyId: string
}

export const Lobby = ({ lobbyId }: Props) => {
  const socket = useAtomValue(socketAtom)

  useEffect(() => {
    socket?.emit('joinLobby', lobbyId)
    socket?.on('lobbyUpdate', (lobby) => {
      console.log(lobby)
    })
  }, [socket])

  return (
    <div className="text-center hero-content">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Lobby {lobbyId}</h1>
        <div className="flex gap-4 mt-6"></div>
      </div>
    </div>
  )
}
