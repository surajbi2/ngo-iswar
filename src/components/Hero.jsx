export default function Hero({ title, subtitle, ctaButtons }) {
    return (
      <div className="bg-[#1E3A8A] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{subtitle}</p>
          <div className="flex justify-center gap-4">
            {ctaButtons.map((button, index) => (
              <a
                key={index}
                href={button.link}
                className={`px-8 py-3 rounded-lg font-semibold transition ${
                  button.primary 
                    ? 'bg-[#B59F3B] text-[#1E3A8A] hover:bg-opacity-90'
                    : 'border-2 border-white hover:bg-white hover:text-[#1E3A8A]'
                }`}
              >
                {button.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }