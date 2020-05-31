<template>
    <form @submit.prevent="handleInput" ref="inputContainer">
        <input
            v-if="!$isMobile"
            v-model="input"
            ref="commandLine"
            type="text"
        >
    </form>
</template>

<script>
export default {
    name: 'DesktopInput',
    data: function() {
        return {
            input: '',
            inputPrefixes: ['cd', 'nano'],
            sections: {
                bio: 1,
                experience: 2,
                work: 3,
                contact: 4
            }
        }
    },
    methods: {
        handleInput() {
            let inputSet = this.prepareInput(this.input);
            let response = this.validateInput(inputSet);

            if (!response.success) {
                 this.$emit('commandLineError', response.message);
            } else {
                this.$emit('commandLineRequest', this.sections[inputSet[1]]);
                this.input = '';
            }
        },
        prepareInput(command) {
            return command.trim().toLowerCase().split(' ').filter(item => item);
        },
        validateInput(inputSet) {
            let response = {
                success: false,
                message: ''
            };

            while (response.message.length === 0) {
                if (!inputSet || inputSet.length !== 2) {
                    response.message = 'Exactly two arguments required';
                    break;
                }

                if (!this.inputPrefixes.includes(inputSet[0])) {
                    response.message = 'Invalid command';
                    break;
                }

                if (!(inputSet[1] in this.sections)) {
                    response.message = 'No such file or directory';
                    break;
                }

                response.success = true;
                response.message = 'Valid entry';
            }

            return response;
        }
    }
}
</script>
