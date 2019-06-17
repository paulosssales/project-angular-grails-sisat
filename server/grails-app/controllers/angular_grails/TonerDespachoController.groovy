package angular_grails

import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.*

class TonerDespachoController {

    TonerDespachoService tonerDespachoService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond tonerDespachoService.list(params), model:[tonerDespachoCount: tonerDespachoService.count()]
    }

    def show(Long id) {
        respond tonerDespachoService.get(id)
    }

    def save(TonerDespacho tonerDespacho) {
        if (tonerDespacho == null) {
            render status: NOT_FOUND
            return
        }

        try {
            tonerDespachoService.save(tonerDespacho)
        } catch (ValidationException e) {
            respond tonerDespacho.errors, view:'create'
            return
        }

        respond tonerDespacho, [status: CREATED, view:"show"]
    }

    def update(TonerDespacho tonerDespacho) {
        if (tonerDespacho == null) {
            render status: NOT_FOUND
            return
        }

        try {
            tonerDespachoService.save(tonerDespacho)
        } catch (ValidationException e) {
            respond tonerDespacho.errors, view:'edit'
            return
        }

        respond tonerDespacho, [status: OK, view:"show"]
    }

    def delete(Long id) {
        if (id == null) {
            render status: NOT_FOUND
            return
        }

        tonerDespachoService.delete(id)

        render status: NO_CONTENT
    }
}
