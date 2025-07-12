
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Tyche & Ares Brand Colors
				navy: {
					50: '#e8eaf6',
					100: '#ccebe8',
					200: '#99d6d1',
					300: '#7DAEA9',
					400: '#5a9590',
					500: '#4a7c77',
					600: '#3a625f',
					700: '#2a4947',
					900: '#3a625f',
					950: '#2a4947'
				},
				gold: {
					50: '#faf7f0',
					100: '#f0e6d4',
					200: '#e1cca9',
					300: '#d2b27e',
					400: '#c39b66',
					500: '#B38953',
					600: '#9a7544',
					700: '#7a5d36',
					800: '#5a4528',
					900: '#3a2d1a'
				},
				charcoal: {
					50: '#f5f5f5',
					100: '#eeeeee',
					200: '#e0e0e0',
					300: '#bdbdbd',
					400: '#9e9e9e',
					500: '#757575',
					600: '#616161',
					700: '#424242',
					800: '#303030',
					900: '#212121',
					950: '#0f0f0f'
				}
			},
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'inter': ['Inter', 'sans-serif'],
				'mono': ['Roboto Mono', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'typing': {
					'0%': {
						width: '0%',
						visibility: 'hidden'
					},
					'100%': {
						width: '100%'
					}
				},
				'blink': {
					'50%': {
						borderColor: 'transparent'
					}
				},
				'gold-glow': {
					'0%, 100%': {
						textShadow: '0 0 5px #d4af37, 0 0 10px #d4af37, 0 0 15px #d4af37'
					},
					'50%': {
						textShadow: '0 0 10px #d4af37, 0 0 20px #d4af37, 0 0 30px #d4af37'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'slide-up': {
					'0%': {
						transform: 'translateY(100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'counter': {
					'0%': {
						transform: 'translateY(100%)'
					},
					'100%': {
						transform: 'translateY(0%)'
					}
				},
				'ripple': {
					'0%': {
						transform: 'scale(0)',
						opacity: '0.6'
					},
					'100%': {
						transform: 'scale(4)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'fade-in-left': 'fade-in-left 0.6s ease-out',
				'fade-in-right': 'fade-in-right 0.6s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'typing': 'typing 2s steps(30, end), blink 1s infinite',
				'gold-glow': 'gold-glow 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s ease-out',
				'counter': 'counter 0.8s ease-out',
				'ripple': 'ripple 0.6s linear'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'hero-pattern': 'linear-gradient(135deg, rgba(33, 90, 100, 0.9) 0%, rgba(125, 174, 169, 0.8) 100%)',
				'gold-gradient': 'linear-gradient(135deg, #B38953 0%, #d2b27e 100%)',
				'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
			

},
			

			backdropBlur: {
				xs: '2px'
			},
			boxShadow: {
				
				'gold': '0 0 20px rgba(179, 137, 83, 0.3)',
				'gold-lg': '0 0 40px rgba(179, 137, 83, 0.4)',
				'premium': '0 20px 40px rgba(0, 0, 0, 0.1)',
				'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',

			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
