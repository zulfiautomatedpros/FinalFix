module.exports = {
    content: ["./**/*.html"],
    theme: {
      extend: {
        fontFamily: {
          dm: ['"DM Sans"', "sans-serif"],
        },
        colors: {
          // Using the provided colors (you may add additional custom colors if needed)
          'background-white-100': '#ffffff',
          'background-status-accepted': '#119717',
        },
        borderRadius: {
          '48px': '48px',
          '16px': '16px',
          '25px': '25px',
        },
        spacing: {
          4: '16px',
          6: '24px',
          12: '48px',
          16: '64px',
        },
        // Custom breakpoints if you prefer named screens over arbitrary variants
        screens: {
          'custom-lg': {'max': '992px'},
          'custom-sm': {'max': '480px'},
        },
        // If you need to use a custom gradient angle or arbitrary values,
        // Tailwind’s JIT allows the use of square-bracket notation.
      },
    },
    plugins: [],
  };
  