module.exports = {
    jsc: {
      parser: {
        syntax: 'typescript',
        jsx: true,
      },
      transform: {
        react: {
          pragma: 'React',
          version: '19',
        },
      },
    },
  };
  