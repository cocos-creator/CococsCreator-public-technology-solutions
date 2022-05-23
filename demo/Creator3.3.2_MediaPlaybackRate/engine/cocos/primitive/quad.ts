/*
 Copyright (c) 2020 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
 worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
 not use Cocos Creator software for developing other software or tools that's
 used for developing games. You are not granted to publish, distribute,
 sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

/**
 * @packageDocumentation
 * @module 3d/primitive
 */

import { applyDefaultGeometryOptions, IGeometry, IGeometryOptions } from './define';

/**
 * @en
 * Generate a quad with width and height both to 1, centered at origin.
 * @zh
 * 生成一个四边形，宽高都为1，中心在原点。
 * @param options 参数选项。
 */
export default function quad (options?: IGeometryOptions): IGeometry {
    const normalizedOptions = applyDefaultGeometryOptions(options);
    const result: IGeometry = {
        positions: [
            -0.5, -0.5, 0, // bottom-left
            -0.5,  0.5, 0, // top-left
            0.5,  0.5, 0, // top-right
            0.5, -0.5, 0, // bottom-right
        ],
        indices: [
            0, 3, 1,
            3, 2, 1,
        ],
        minPos: {
            x: -0.5, y: -0.5, z: 0,
        },
        maxPos: {
            x: 0.5, y: 0.5, z: 0,
        },
        boundingRadius: Math.sqrt(0.5 * 0.5 + 0.5 * 0.5),
    };
    if (normalizedOptions.includeNormal !== false) {
        result.normals = [
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
        ];
    }
    if (normalizedOptions.includeUV !== false) {
        result.uvs = [
            0, 0,
            0, 1,
            1, 1,
            1, 0,
        ];
    }
    return result;
}
