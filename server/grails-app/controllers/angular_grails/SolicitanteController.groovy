package angular_grails

import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.*

class SolicitanteController {

    SolicitanteService solicitanteService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond solicitanteService.list(params), model:[solicitanteCount: solicitanteService.count()]
    }

    def show(Long id) {
        respond solicitanteService.get(id)
    }

    def save(Solicitante solicitante) {
        if (solicitante == null) {
            render status: NOT_FOUND
            return
        }

        try {
            solicitanteService.save(solicitante)
        } catch (ValidationException e) {
            respond solicitante.errors, view:'create'
            return
        }

        respond solicitante, [status: CREATED, view:"show"]
    }

    def update(Solicitante solicitante) {
        if (solicitante == null) {
            render status: NOT_FOUND
            return
        }

        try {
            solicitanteService.save(solicitante)
        } catch (ValidationException e) {
            respond solicitante.errors, view:'edit'
            return
        }

        respond solicitante, [status: OK, view:"show"]
    }

    def delete(Long id) {
        if (id == null) {
            render status: NOT_FOUND
            return
        }

        solicitanteService.delete(id)

        render status: NO_CONTENT
    }
}
