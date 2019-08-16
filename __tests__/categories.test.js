const Categories = require('../categories/categories.js');

describe('Categories Model', () => {

    let categories;

    beforeEach(() => {
        categories = new Categories();
    })

    // How might we repeat this to check on types?
    it('sanitize() returns undefined with missing requirements', () => {
        const schema = categories.schema;
        var testRecord = {};
        for (var field in schema) {
            if (schema[field].required) {
                testRecord[field] = null;
            }
        }
        expect(categories.sanitize(testRecord)).toEqual(false);
    });

    it('validates that the name is the correct data type', () => {
        console.log(categories.schema)
        expect(categories.sanitize({id: 1, name: 2,})).toEqual(false);
    });

    it('can post() a new category', () => {
        let obj = { name: 'Test Category' };
        return categories.create(obj)
            .then(record => {
                Object.keys(obj).forEach(key => {
                    expect(record[key]).toEqual(obj[key]);
                });
            })
            .catch(e => console.error('ERR', e));
    });

    it('can delete() a category', () => {
        let obj = {name: 'Test Category Delete'};
        console.log('object type', typeof obj.id)
        return categories.create(obj)
          .then(createRecord => {
              return categories.delete(createRecord)
                .then(record => {
                    expect(record).toEqual(undefined);
                })
                .catch(e => console.error('ERR', e));
          });
    });



    it('can update() a category', () => {
        let obj = { name: 'Test Category Update' };
        console.log('object type', typeof obj.id)
        return categories.create(obj)
            .then(createRecord => {
                obj.name = 'Test 2';
                return categories.update(createRecord._id, obj)
                    .then(newRecord => {
                        expect(newRecord.name).toEqual(obj.name);
                    });
            }).catch(e => console.error('ERR', e));
    });


    it('can get() a category', () => {
        let obj = { name: 'Test Category' };
        return categories.create(obj)
            .then(record => {
                return categories.get(record._id)
                    .then(category => {
                        Object.keys(obj).forEach(key => {
                            expect(category[0][key]).toEqual(obj[key]);
                        });
                    });
            }).catch(e => console.error('ERR', e));
    });



});