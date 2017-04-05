import {JsonController} from "../../../../../src/decorator/JsonController";
import {Get} from "../../../../../src/decorator/Method";

@JsonController()
export class QuestionController {

    @Get("/questions")
    getAll() {
        return [{
            id: 1,
            title: "#1"
        }, {
            id: 2,
            title: "#2"
        }];
    }

}