import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JosnusersService } from '../service/josnusers.service';
import { ConverFileSizePipe } from '../pipes/conver-file-size.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ConverFileSizePipe ],
  exports: [ ConverFileSizePipe ],
  providers: []
})
export class JsonmoduleModule {
  constructor (@Optional() @SkipSelf() parentModule: JsonmoduleModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders{
    return {
      ngModule: JsonmoduleModule,
      providers:[ JosnusersService ]

    }
  }
}
