import { useEffect, useState } from "react"

export function useScrollAnimation(sectionId: string, threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold }
    )

    const section = document.getElementById(sectionId)
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [isVisible, sectionId, threshold])

  return isVisible
}
