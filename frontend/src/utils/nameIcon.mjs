export const nameIcon = (fistname, lastname) => {
    try {
        return fistname[0] + lastname[0]

    } catch (error) {
        return "XX" // need to fix this undefined issue
    }
}