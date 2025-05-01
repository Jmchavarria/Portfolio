export const Particles = () => {
    return (
        <div className="relative w-full h-full">
            {Array.from({ length: 30 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-white opacity-60 blur-sm animate-float-glow"  // Aumenté la opacidad y el tamaño
                    style={{
                        width: `${Math.random() * 6 + 4}px`,  // Aumenté el tamaño
                        height: `${Math.random() * 6 + 4}px`, // Aumenté el tamaño
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,  // Reduje el tiempo de retraso para más dinamismo
                        animationDuration: `${Math.random() * 7 + 5}s`, // Ajusté la duración para que el movimiento sea más suave
                    }}
                />
            ))}
        </div>
          
    )
}