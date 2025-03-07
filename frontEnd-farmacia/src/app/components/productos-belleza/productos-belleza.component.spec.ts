import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosBellezaComponent } from './productos-belleza.component';

describe('ProductosBellezaComponent', () => {
  let component: ProductosBellezaComponent;
  let fixture: ComponentFixture<ProductosBellezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosBellezaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosBellezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
