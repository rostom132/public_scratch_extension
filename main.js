(function (runtime, args) {
    return {
        id: 'arduinoTemplate',
        name: 'Logic',
        color1: '#3fb59e',
        color2: '#2fa58e',
        hello: () => { console.log('TIEN PRO QUA') },
        blocks: [
            {
                opcode: 'if',
                rawCode: {
                    code: 'if (/*{CONDITION}*/) {\n' +
                        '/*{SUBSTACK}*/' +
                        '}\n'
                },
                text: [
                    'nếu [CONDITION] thì',
                    '[SUBSTACK]'
                ],
                arguments: {
                    CONDITION: {
                        type: args.ArgumentType.BOOLEAN
                    },
                    SUBSTACK: {
                        type: args.ArgumentType.STATEMENT
                    }
                },
                blockType: args.BlockType.CUSTOM
            }
        ]
    };
})