package angular_grails

import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.*

class TonerController {

    TonerService tonerService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond tonerService.list(params), model:[tonerCount: tonerService.count()]
    }

    def show(Long id) {
        respond tonerService.get(id), formats: ['json']
    }

    def save(Toner toner) {
        if (toner == null) {
            render status: NOT_FOUND
            return
        }

        try {
            tonerService.save(toner)
        } catch (ValidationException e) {
            respond toner.errors, view:'create'
            return
        }

        respond toner, [status: CREATED, view:"show"]
    }

    def update(Toner toner) {
        if (toner == null) {
            render status: NOT_FOUND
            return
        }

        try {
            tonerService.save(toner)
        } catch (ValidationException e) {
            respond toner.errors, view:'edit'
            return
        }

        respond toner, [status: OK, view:"show"]
    }

    def delete(Long id) {
        if (id == null) {
            render status: NOT_FOUND
            return
        }

        tonerService.delete(id)

        render status: NO_CONTENT
    }
}
