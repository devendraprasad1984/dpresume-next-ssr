import { execSync } from 'child_process'

export default {
    currentSha() {
        return String(execSync('git log --pretty=format:"%H" -n 1'))
    },

    currentStatus() {
        return String(execSync('git status --porcelain'))
    },

    isShaOnOriginMaster(sha) {
        // git script returns an empty string if the given sha is not on the remote
        return (
            String(execSync(`git branch origin/master -a --contains ${sha}`))
                .length > 0
        )
    },
}
