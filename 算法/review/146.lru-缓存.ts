/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start
class LRUCache {
    private caches = new Map<number, number>()
    private capacity: number
    constructor(capacity: number) {
        this.capacity = capacity
    }

    get(key: number): number {
        const val = this.caches.get(key)
        if (val !== undefined) {
            this.caches.delete(key)
            this.caches.set(key, val)
            return val
        } else {
            return -1
        }
    }

    put(key: number, value: number): void {
        if (this.caches.has(key)) {
            this.caches.delete(key)
            this.caches.set(key, value)
        } else {
            if (this.caches.size >= this.capacity) {
                const leastRecentKey = this.caches.keys().next().value
                this.caches.delete(leastRecentKey)
            }
            this.caches.set(key, value)
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end




