const generateUniqueId = require('../../src/utils/gernerateUniqueId');
describe('Generate Unique ID', () => {
	it('Should genarate an unique ID', () => {
		const id = generateUniqueId();

		expect(id).toHaveLength(8)
	})
})