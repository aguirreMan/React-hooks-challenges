export function debounce<T extends unknown[]>(callback: (...args: T) => void, delay = 1000): (...args: T) => void {
    let timeoutId: ReturnType<typeof setTimeout>

    return (...args) => {
        clearTimeout(timeoutId)

        timeoutId = setTimeout(() => {
            callback(...args)
        }, delay)
    }
}

