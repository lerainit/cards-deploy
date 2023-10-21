
import instance from "./instance.js"

const getCards = async () => {
    try {
        const { status, data } = await instance.get('')
        if (status === 200) {
            localStorage.setItem('cards', JSON.stringify(data))
        }
        return data
    } catch (err) {
        console.log(err)
    }
}

export default getCards;
