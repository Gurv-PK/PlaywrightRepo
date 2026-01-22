const playwright = require("playwright");
const AllureNodeEnvironment = require("jest-circus-allure-environment").default;

class PlaywrightEnvironment extends AllureNodeEnvironment {

    constructor(config, context) {
        super(config, context);
    }

    async setup() {
        await super.setup()
        this.global.browser = await playwright.chromium.launch({ headless: false })
        this.global.context = await this.global.browser.newContext();
        this.global.page = await this.global.context.newPage();
    }

    async teardown() {
        if (this.global.browser) {
            await this.global.browser.close();
        }
        await super.teardown();
    }

    async handleTestEvent(event, state) {
        await super.handleTestEvent(event, state)
        switch (event.name) {
            case 'setup':
                break
            case 'add_hook':
                break
            case 'add_test':
                break
            case 'run_start':
                break
            case 'test_skip':
                break
            case 'test_todo':
                break
            case 'start_describe_definition':
                break
            case 'finish_describe_definition':
                break
            case 'run_describe_start':
                break
            case 'test_start':
                break
            case 'hook_start':
                break
            case 'hook_success':
                break
            case 'hook_failure':
                break
            case 'test_fn_start':
                break
            case 'test_fn_success':
                break
            case 'test_fn_failure':
                await this.global.allure.attachment("Screenshot", await this.global.page.screenshot(), "image/png")
                break
            case 'test_done':
                break
            case 'run_describe_finish':
                break
            case 'run_finish':
                break
            case 'teardown':
                break
            case 'error':
                break
            default:
                break
        }
    }
}

module.exports = PlaywrightEnvironment