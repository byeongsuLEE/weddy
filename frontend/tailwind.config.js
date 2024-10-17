/** @type ***REMOVED***import('tailwindcss').Config***REMOVED*** */
export default ***REMOVED***
    darkMode: ["class"],
    content: ["./src/**/*.***REMOVED***js,jsx,ts,tsx***REMOVED***", './public/index.html'],
  theme: ***REMOVED***
  	extend: ***REMOVED***
  		colors: ***REMOVED***
  			mainbg: '#FFFFE6',
  			main1: '#FFFFC8',
  			main2: '#FFFC51',
  			main3: '#8F0786',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: ***REMOVED***
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			***REMOVED***,
  			popover: ***REMOVED***
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			***REMOVED***,
  			primary: ***REMOVED***
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			***REMOVED***,
  			secondary: ***REMOVED***
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			***REMOVED***,
  			muted: ***REMOVED***
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			***REMOVED***,
  			accent: ***REMOVED***
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			***REMOVED***,
  			destructive: ***REMOVED***
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			***REMOVED***,
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: ***REMOVED***
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			***REMOVED***
  		***REMOVED***,
  		borderRadius: ***REMOVED***
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		***REMOVED***
  	***REMOVED***
  ***REMOVED***,
  plugins: [require("tailwindcss-animate")],
***REMOVED***;
