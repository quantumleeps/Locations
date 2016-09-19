import { Component, OnInit, Input } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BOMLines } from '../../../both/collections/bom-lines.collection';

import template from './bom-input.component.html';

@Component({
    selector: 'bom-input',
    template,
    directives: [REACTIVE_FORM_DIRECTIVES]
})

export class BOMInput implements OnInit {

    selectedFitting: Object;
    fittingQty: number;
    selectedSize1 = '';
    selectedSize2 = '';
    selectedMaterial = '';
    selectedSchedule = '';
    curScheduleArray: string[];

    fittings = ['90 Deg Ell', '45 Deg Ell', '150# Vanstone Flange', 'PP Encapsulated DI Backup Ring'];
    sizes = ['1/2', '3/4', '1', '1-1/4', '1-1/2', '2', '2-1/2', '3', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '28']
    materials = ['PVC', 'HDPE', '316 SS', 'Super Duplex SS', 'FRP'];
    schedules = ['Sch 40', 'Sch 80']


    fittingsNew = [
        {
            description: '90 Deg Ell (S X S)',
            type: 'typical',
            materialsAvailable: ['PVC', 'HDPE', '316 SS', 'Super Duplex SS', 'FRP']
        }, {
            description: '150# Vanstone Flange',
            type: 'flange',
            materialsAvailable: ['PVC']
        }, {
            description: '90 Deg Ell (Thread X Thread)',
            type: 'typical',
            materialsAvailable: ['PVC', '316 SS', 'Super Duplex SS']
        }, {
            description: '150# PP Encapsulated DI Backup Ring',
            type: 'flange-ring',
            materialsAvailable: ['HDPE']
        }, {
            description: 'Concentric reducer',
            type: 'reducer',
            materialsAvailable: ['PVC', 'HDPE', '316 SS', 'Super Duplex SS', 'FRP']
        }, {
            description: 'Pipe 20 Ft Lng (Thread x Thread)',
            type: 'straight',
            materialsAvailable: ['PVC', 'HDPE', '316 SS', 'Super Duplex SS', 'FRP']
        }, {
            description: 'Flange Adapter',
            type: 'typical',
            materialsAvailable: ['HDPE']
        }, {
            description: 'Tee',
            type: 'typical',
            materialsAvailable: ['PVC', 'HDPE', '316 SS', 'Super Duplex SS', 'FRP']
        }, {
            description: '150# Weld-neck Flange',
            type: 'flange',
            materialsAvailable: ['316 SS', 'Super Duplex SS']
        }, {
            description: '45 Deg Ell',
            type: 'typical',
            materialsAvailable: ['PVC', 'HDPE', '316 SS', 'Super Duplex SS', 'FRP']
        }];

    schedulesNew = [
        {
            material: 'PVC',
            schedules: ['Sch 40', 'Sch 80']
        }, {
            material: '316 SS',
            schedules: ['Sch 5s', 'Sch 10s', 'Sch 40s', 'Sch 80s', 'Sch 160s']
        }, {
            material: 'Super Duplex SS',
            schedules: ['Sch 5s', 'Sch 10s', 'Sch 40s', 'Sch 80s', 'Sch 160s']
        }, {
            material: 'HDPE',
            schedules: ['DR11', 'DR17', 'DR26']
        }, {
            material: 'FRP',
            schedules: ['SDR11', 'SDR17', 'SDR26']
        }]

    ngOnInit() {
    
    }

    onChangeFitting(event) {
        this.selectedFitting = event;
        // console.log(event)
    }

    onChangeSize1(event) {
        this.selectedSize1 = event;
    }

    onChangeSize2(event) {
        this.selectedSize2 = event;
    }

    onChangeMaterial(event) {
        this.curScheduleArray = [];
        this.selectedMaterial = event;
        for (var i = 0; i < this.schedulesNew.length; i++) {
            if (this.selectedMaterial === this.schedulesNew[i].material) {
                this.curScheduleArray = this.schedulesNew[i].schedules;
            }
        }
    }

    onChangeSchedule(event) {
        this.selectedSchedule = event;
    }

    addLine() {
        var fittingString = "";
        if (this.selectedFitting.type === 'reducer') {
            fittingString = this.selectedSize1 + " X " + this.selectedSize2 + " " + this.selectedSchedule + " " + this.selectedMaterial + " " + this.selectedFitting.description;
            console.log(fittingString.toUpperCase())
        } else if (this.selectedFitting.type === 'flange-ring') {
            fittingString = this.selectedSize1 + " IN. " + this.selectedFitting.description;
            console.log(fittingString.toUpperCase())
        } else {
            fittingString = this.selectedSize1 + " IN. " + this.selectedSchedule + " " + this.selectedMaterial + " " + this.selectedFitting.description;
            console.log(fittingString.toUpperCase())
        }
        BOMLines.insert({
                valueString: fittingString.toUpperCase(),
                quantity: this.fittingQty,
                units: "EA",
                deleteClicked: false
            })
    }

}