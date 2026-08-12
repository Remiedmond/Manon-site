'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useIsMobile } from '@/app/hooks/useIsMobile'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer')
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  if (isMobile) return null 

  return (
    <div
      style={{
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.1s ease, height 0.1s ease',
        zIndex: 9999,
        userSelect: 'none',
      }}
    >
      <Image
        src={isPointer ? '/cursors/balance.svg' : '/cursors/robe.svg'}
        width={isPointer ? 36 : 32}
        height={isPointer ? 36 : 32}
        alt=""
      />
    </div>
  )
}