export class TestDataGenerator {
    /**
     * Sinh một email ngẫu nhiên có chứa timestamp để traceable.
     */
    static generateRandomEmail(prefix: string = 'test'): string {
        const timestamp = Date.now();
        return `${prefix}_${timestamp}@auto.test`;
    }

    /**
     * Sinh một username ngẫu nhiên.
     */
    static generateRandomUsername(prefix: string = 'user'): string {
        const timestamp = Date.now();
        return `${prefix}_${timestamp}`;
    }

    /**
     * Sinh một chuỗi ngẫu nhiên với độ dài chỉ định.
     */
    static generateRandomString(length: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
}
