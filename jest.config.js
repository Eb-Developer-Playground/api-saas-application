globalThis.ngJest = {
    skipNgcc: true,
    tsconfig: 'tsconfig.spec.json', // this is the project root tsconfig
};

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
    preset: 'jest-preset-angular',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    transform: {
      '^.+\\.ts$': 'ts-jest', // Only transform .ts files
    },
    transformIgnorePatterns: [
      '/node_modules/(?!flat)/', // Exclude modules except 'flat' from transformation
    ],
    // moduleNameMapper: {
    // },
    moduleDirectories: ['node_modules', 'src'],
    fakeTimers: {
        enableGlobally: true,
    },
    // reporters
    // reporters: [
    //     'default',
    //     [
    //         'jest-junit',
    //         {
    //             outputDirectory: './coverage/test-report',
    //             outputName: 'test-report.xml',
    //         },
    //     ],
    // ],
    // // coverage directory
    // coverageDirectory: './coverage',
    // collectCoverage: true,
    // coverageReporters: ["cobertura", "lcov", "html"],
};