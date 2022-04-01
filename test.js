function makeIdGenerator(prefix = 'image') {
    let counter = 1
    return () => prefix + '-' + counter++
}

const imageIdGenerator = makeIdGenerator("image");
const linkIdGenerator = makeIdGenerator("link");
console.log(imageIdGenerator())
console.log(imageIdGenerator())
console.log(linkIdGenerator())
console.log(imageIdGenerator())


// // Tests
// describe("makeIdGenerator", () => {
//     it.skip("should create multiple id generators with unique counters", () => {
//         const imageIdGenerator = makeIdGenerator("image");
//         const linkIdGenerator = makeIdGenerator("link");
//
//         expect(imageIdGenerator()).toBe("image-1");
//         expect(imageIdGenerator()).toBe("image-2");
//         expect(linkIdGenerator()).toBe("link-1");
//         expect(imageIdGenerator()).toBe("image-3");
//     });
// });

