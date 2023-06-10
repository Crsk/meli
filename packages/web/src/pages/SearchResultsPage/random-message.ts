const randomLoadingMessage = () => {
  const loadingMessages = [
    'Brilla siempre ✨',
    'Disfruta el momento 🌟',
    'Sonríe 😄',
    'Sueña en grande 🌙✨',
    'Abraza el presente 🤗',
    'Haz lo que amas 💖',
    '¡Tú puedes! 💪💫',
    'Disfruta el viaje 🌈',
    'Eres increíble 💫✨',
    'Eres fuerte 🏋️💥',
    'Cree en ti 🦸✨',
    'Despliega tus alas 🦋',
    'El futuro te espera 🚀',
    'Ilumina el mundo 💡',
    'Sé tu mejor versión 💪',
    'Persigue tus sueños 💫',
    'Cada día es una oportunidad 🌞',
    'La vida es un regalo 🎁',
    'Explora, sueña, descubre 🧭✨',
    'Sé el cambio 🌈',
    'Nunca es tarde 🚀',
    'Elige felicidad 😊',
  ]
  const randomIndex = Math.floor(Math.random() * loadingMessages.length)

  return loadingMessages[randomIndex]
}

export { randomLoadingMessage }
