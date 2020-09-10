const { fetchQuotes } = require('./fetchQuotes.js');

describe('fetchQuotes function', () => {
  it('returns a quote from api', async() => {
    const quote = await fetchQuotes();
    expect(quote).toMatchObject({
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String)
    });
  });
});
