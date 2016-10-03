import { Component, OnInit } from '@angular/core';
import { Properties } from '../properties';
import { FileUploader } from 'ng2-file-upload';
import { Cookie } from 'ng2-cookies/ng2-cookies';

const URL = 'workServices/fileServices/upload.do';

@Component({
    moduleId: module.id,
    selector: 'my-adminControl',
    templateUrl: 'admin-control.component.html'
})

export class AdminControlComponent implements OnInit {

    entryText: String = "";
    public uploader: FileUploader = new FileUploader({});
    documento: any;

    constructor(private properties: Properties) { }

    handleUpload(event): void {
        let CSRFValue = Cookie.get('XSRF-TOKEN');
        this.uploader.options.headers = [{ name: 'x-xsrf-token', value: CSRFValue }];
        this.uploader.options.disableMultipart = false;
        this.uploader.uploadAll();
    }

    ngOnInit(): void {
        $('#summernote').summernote(
            {
                height: 300
            }
        );

        this.uploader.options.url = this.properties.urlApi + URL;
    }

    save(): void {
        let entryText = $('#summernote').summernote('code');
    };
}